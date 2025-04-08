'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import Footer from "../components/Footer";
import { Camera, Upload, X, DollarSign, Calendar, Tag, MapPin, ShoppingBag, ChevronRight, ChevronLeft, CheckCircle, IndianRupee } from "lucide-react";

const CreateListingPage = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [animation, setAnimation] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    category: "ELECTRONICS",
    price1Day: "",
    price3Days: "",
    price7Days: "",
    salePrice: "",
    availableForRent: true,
    availableForSale: false,
    images: [] as File[],
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate form completion percentage
  useEffect(() => {
    const requiredFields = ['title', 'description', 'address', 'city', 'price1Day'];
    const completedFields = requiredFields.filter(field => formData[field as keyof typeof formData]).length;
    setIsFormComplete(completedFields === requiredFields.length);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      
      // Clear error for this field when user types
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = {...prev};
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newPreviewUrls: string[] = [];
      
      newFiles.forEach(file => {
        newPreviewUrls.push(URL.createObjectURL(file));
      });
      
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newFiles]
      }));
      
      setImagePreview(prev => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    
    setImagePreview(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): { [key: string]: string } => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.price1Day || isNaN(Number(formData.price1Day))) {
      newErrors.price1Day = "Valid price for 1 day is required";
    }
    return newErrors;
  };

       const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in");
        return;
      }
    
      const token = await user.getIdToken();
      console.log("Token being sent:", token);
    
      // Prepare the payload and exclude the images field
      const { images, ...payload } = {
        ...formData,
        price1Day: parseFloat(formData.price1Day),
        price3Days: parseFloat(formData.price3Days || "0"),
        price7Days: parseFloat(formData.price7Days || "0"),
        salePrice: parseFloat(formData.salePrice || "0"),
      };
    
      console.log("Payload being sent (without images):", payload);
    
      setIsSubmitting(true);
    
      const res = await fetch("http://localhost:8080/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
    
      setIsSubmitting(false);
    
      console.log("Response status:", res.status);
      if (res.ok) {
        setAnimation("success");
        setTimeout(() => {
          router.push("/search");
        }, 1500);
      } else {
        const error = await res.text();
        console.error("Error response:", error);
        setAnimation("error");
        setTimeout(() => {
          setAnimation("");
          alert("Error: " + error);
        }, 1500);
      }
    };

  const nextStep = () => {
    setAnimation("slide-out");
    setTimeout(() => {
      setStep(prev => prev + 1);
      setAnimation("slide-in");
      setTimeout(() => setAnimation(""), 500);
    }, 300);
  };

  const prevStep = () => {
    setAnimation("slide-out-reverse");
    setTimeout(() => {
      setStep(prev => prev - 1);
      setAnimation("slide-in-reverse");
      setTimeout(() => setAnimation(""), 500);
    }, 300);
  };

  // Based on the current step, determine what to render
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
         <div className={`transition-all duration-500 ease-in-out ${animation}`}>
  <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
    <span className="text-orange-500">📝</span> Tell us about your item
  </h2>

  <div className="grid gap-6">
    {/* Title Field */}
    <div className="flex flex-col">
      <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2">
        Title <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="What are you renting out?"
        value={formData.title}
        onChange={handleChange}
        className={`w-full p-4 rounded-2xl shadow-md border focus:outline-none transition-all
          ${
            errors.title
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400"
              : "border-gray-200 bg-white focus:ring-2 focus:ring-orange-400"
          }
          ${formData.title ? "ring-1 ring-green-400" : ""}`}
      />
      {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
    </div>

    {/* Category Selector */}
    <div className="flex flex-col">
      <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2">
        Category <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-4 pr-10 rounded-2xl bg-white border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
        >
          <option disabled value="">
            Select a category
          </option>
          <option value="ELECTRONICS">Electronics</option>
          <option value="VEHICLES">Vehicles</option>
          <option value="HOME_APPLIANCES">Home Appliances</option>
          <option value="SPORTS">Sports</option>
          <option value="TOOLS">Tools</option>
          <option value="CLOTHING">Clothing</option>

        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <Tag size={20} className="text-orange-400" />
        </div>
      </div>
    </div>

    {/* Description Field */}
    <div className="flex flex-col">
      <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
        Description <span className="text-red-500">*</span>
      </label>
      <textarea
        id="description"
        name="description"
        placeholder="Include brand, model, condition, features..."
        value={formData.description}
        onChange={handleChange}
        rows={5}
        className={`w-full p-4 rounded-2xl shadow-md border focus:outline-none transition-all resize-none
          ${
            errors.description
              ? "border-red-400 bg-red-50 focus:ring-2 focus:ring-red-400"
              : "border-gray-200 bg-white focus:ring-2 focus:ring-orange-400"
          }
          ${formData.description ? "ring-1 ring-green-400" : ""}`}
      />
      {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
    </div>

    {/* Pro Tip Box */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-4 rounded-2xl border-l-4 border-orange-400 shadow-sm">
      <p className="text-sm text-orange-700">
        💡 <strong>Pro tip:</strong> Detailed descriptions help renters find your item. Mention condition, brand, model, and unique features.
      </p>
    </div>
  </div>
</div>

        );
      
      case 2:
        return (
          <div className={`transition-all duration-300 ${animation}`}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              Upload photos & set location
            </h2>
            
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {imagePreview.map((src, index) => (
                  <div key={index} className="relative h-32 rounded-xl overflow-hidden bg-gray-100 shadow-md">
                    <img src={src} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition shadow-lg"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                
                <label className="cursor-pointer h-32 border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center text-blue-500 hover:bg-blue-50 transition">
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleImageUpload}
                  />
                  <Camera size={32} className="mb-2" />
                  <span className="text-sm font-medium">Add photo</span>
                </label>
              </div>
              <p className="text-sm text-gray-500">Great photos increase your chances of renting out your item!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              <div className="flex flex-col">
                <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter pickup address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 pl-10 shadow-sm ${
                      errors.address ? "focus:ring-red-500 bg-red-50" : "focus:ring-blue-500"
                    } ${formData.address ? "ring-1 ring-green-400" : ""}`}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPin size={20} className="text-blue-500" />
                  </div>
                </div>
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter the city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 shadow-sm ${
                    errors.city ? "focus:ring-red-500 bg-red-50" : "focus:ring-blue-500"
                  } ${formData.city ? "ring-1 ring-green-400" : ""}`}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className={`transition-all duration-300 ${animation}`}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
              Set your prices
            </h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl mb-6 border-l-4 border-indigo-500">
              <p className="text-sm text-indigo-700">💰 Pro tip: Items with competitive prices rent out more frequently. Check other similar listings to get an idea of market rates.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Availability Toggles */}
              <div className="col-span-full flex flex-col md:flex-row gap-4">
                <label className={`flex items-center p-4 rounded-xl cursor-pointer transition shadow-sm ${formData.availableForRent ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gray-50'}`}>
                  <input
                    type="checkbox"
                    name="availableForRent"
                    checked={formData.availableForRent}
                    onChange={handleChange}
                    className="mr-2 h-5 w-5"
                  />
                  <span className="font-medium">Available for Rent</span>
                </label>
                
                <label className={`flex items-center p-4 rounded-xl cursor-pointer transition shadow-sm ${formData.availableForSale ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' : 'bg-gray-50'}`}>
                  <input
                    type="checkbox"
                    name="availableForSale"
                    checked={formData.availableForSale}
                    onChange={handleChange}
                    className="mr-2 h-5 w-5"
                  />
                  <span className="font-medium">Available for Sale</span>
                </label>
              </div>
              
              {/* Rental Prices */}
              {formData.availableForRent && (
                <>
                  <div className="flex flex-col">
                    <label htmlFor="price1Day" className="text-sm font-medium text-gray-700 mb-1">
                      Price for 1 Day
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="price1Day"
                        name="price1Day"
                        placeholder="0.00"
                        value={formData.price1Day}
                        onChange={handleChange}
                        className={`w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 pl-10 shadow-sm ${
                          errors.price1Day ? "focus:ring-red-500 bg-red-50" : "focus:ring-blue-500"
                        }`}
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <IndianRupee size={20} className="text-blue-500" />
                      </div>
                    </div>
                    {errors.price1Day && <p className="text-red-500 text-sm mt-1">{errors.price1Day}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="price3Days" className="text-sm font-medium text-gray-700 mb-1">
                      Price for 3 Days <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="price3Days"
                        name="price3Days"
                        placeholder="0.00"
                        value={formData.price3Days}
                        onChange={handleChange}
                        className="w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 shadow-sm"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <IndianRupee size={20} className="text-blue-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="price7Days" className="text-sm font-medium text-gray-700 mb-1">
                      Price for 7 Days <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="price7Days"
                        name="price7Days"
                        placeholder="0.00"
                        value={formData.price7Days}
                        onChange={handleChange}
                        className="w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 shadow-sm"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <IndianRupee size={20} className="text-blue-500" />
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {/* Sale Price */}
              {formData.availableForSale && (
                <div className="flex flex-col">
                  <label htmlFor="salePrice" className="text-sm font-medium text-gray-700 mb-1">
                    Sale Price
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="salePrice"
                      name="salePrice"
                      placeholder="0.00"
                      value={formData.salePrice}
                      onChange={handleChange}
                      className="w-full p-4 border-0 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10 shadow-sm"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <IndianRupee size={20} className="text-purple-500" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  const ProgressBar = () => (
    <div className="relative mb-16 mt-8">
      {/* Progress line */}
      <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden z-0">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
  
      {/* Step Circles and Labels */}
      <div className="relative flex justify-between items-start z-10">
        {[1, 2, 3].map((stepNum) => (
          <div key={stepNum} className="flex flex-col items-center">
            {/* Circle */}
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg mb-1
                ${step > stepNum ? 'bg-gradient-to-r from-green-400 to-green-500' : 
                  step === stepNum ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-300'}`}
            >
              {step > stepNum ? <CheckCircle size={20} /> : stepNum}
            </div>
  
            {/* Label */}
            <span className={`text-xs text-center font-medium ${
              step >= stepNum ? 'text-gray-800' : 'text-gray-400'
            }`}>
              {stepNum === 1 ? 'Details' : stepNum === 2 ? 'Photos & Location' : 'Pricing'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  
  

  return (
    <>
      <div className="max-w-4xl mx-auto my-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 -mx-8 -mt-8 px-8 pt-12 pb-8 mb-6 text-white">
            <h1 className="text-3xl font-bold">Create a New Listing</h1>
            <p className="mt-2 opacity-90">Rent out your item and start earning extra income!</p>
          </div>
  
          <ProgressBar />
  
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderStep()}
  
            <div className="flex justify-between pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition flex items-center gap-2 font-medium shadow-sm"
                >
                  <ChevronLeft size={20} /> Back
                </button>
              ) : (
                <div></div>
              )}
  
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition flex items-center gap-2 font-medium shadow-md"
                >
                  Continue <ChevronRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-xl transition flex items-center gap-2 font-medium shadow-md ${
                    isSubmitting || !isFormComplete 
                      ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white"
                  }`}
                  disabled={isSubmitting || !isFormComplete}
                >
                  {isSubmitting ? "Creating..." : "Create Listing"} {!isSubmitting && <CheckCircle size={20} />}
                </button>
              )}
            </div>
          </form>
  
          {animation === "success" && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-xl flex flex-col items-center animate-bounce shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  ✓
                </div>
                <p className="text-lg font-medium">Listing created successfully!</p>
              </div>
            </div>
          )}
  
          {animation === "error" && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-xl flex flex-col items-center animate-shake shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  ✕
                </div>
                <p className="text-lg font-medium">Something went wrong!</p>
              </div>
            </div>
          )}
        </div>
      </div>
  
      {/* Full-width footer moved outside */}
      <Footer />
  
      {/* CSS for animations */}
      <style jsx>{`
        .slide-in {
          animation: slideIn 0.3s forwards;
        }
        .slide-out {
          animation: slideOut 0.3s forwards;
        }
        .slide-in-reverse {
          animation: slideInReverse 0.3s forwards;
        }
        .slide-out-reverse {
          animation: slideOutReverse 0.3s forwards;
        }
        .animate-bounce {
          animation: bounce 0.5s infinite alternate;
        }
        .animate-shake {
          animation: shake 0.5s;
        }
  
        @keyframes slideIn {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-20px); opacity: 0; }
        }
        @keyframes slideInReverse {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutReverse {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(20px); opacity: 0; }
        }
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </>
  );
  
};

export default CreateListingPage;