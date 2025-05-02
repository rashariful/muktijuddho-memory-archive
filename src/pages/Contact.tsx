
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'general',
    message: '',
    files: null as FileList | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: e.target.files }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your submission. We will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        inquiryType: 'general',
        message: '',
        files: null
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {/* Header */}
        <section className="relative text-white py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://static.trip101.com/paragraph_media/pictures/002/640/034/large/800px-_E0_A6_AA_E0_A6_BE_E0_A6_B9_E0_A6_BE_E0_A6_A1_E0_A6_BC_E0_A6_AA_E0_A7_81_E0_A6_B0__E0_A6_AC_E0_A7_8C_E0_A6_A6_E0_A7_8D_E0_A6_A7__E0_A6_AC_E0_A6_BF_E0_A6_B9_E0_A6_BE_E0_A6_B0_22.jpg?1659002556"
              alt="Historical background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-archive-navy/80" />
          </div>

          {/* Content */}
          <div className="archive-container relative z-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Contact & Contribute</h1>
            <p className="text-gray-300 max-w-3xl">
              Get in touch with us to ask questions, provide feedback, or contribute materials to the Liberation War Archive. 
              We welcome submissions of documents, photographs, testimonies, and other historical artifacts.
            </p>
          </div>
        </section>


        <section className="py-12">
          <div className="archive-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-2">Visit Us</h3>
                      <address className="not-italic text-gray-600">
                        <p>Liberation War Archive</p>
                        <p>123 University Avenue</p>
                        <p>Dhaka, Bangladesh</p>
                      </address>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-2">Contact Details</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <span className="font-medium block">Email:</span>
                          <a href="mailto:info@liberationwararchive.org" className="text-archive-green hover:underline">
                            info@liberationwararchive.org
                          </a>
                        </li>
                        <li>
                          <span className="font-medium block">Phone:</span>
                          <a href="tel:+8801XXXXXXXX" className="text-archive-green hover:underline">
                            +8801850-273117
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-medium text-lg mb-2">Hours</h3>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10:00 AM - 3:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Subject and Inquiry Type */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input 
                            id="subject"
                            name="subject"
                            placeholder="Subject of your message"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select 
                            value={formData.inquiryType}
                            onValueChange={handleSelectChange}
                          >
                            <SelectTrigger id="inquiryType" className="w-full">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="contribution">Material Contribution</SelectItem>
                              <SelectItem value="research">Research Request</SelectItem>
                              <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          placeholder="Please provide details of your inquiry or contribution"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      {/* File Upload */}
                      <div className="space-y-2">
                        <Label htmlFor="files">Upload Files (Optional)</Label>
                        <Input 
                          id="files"
                          name="files"
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="cursor-pointer"
                        />
                        <p className="text-xs text-gray-500">
                          You can upload documents, images, or other materials related to your inquiry or contribution. 
                          Max file size: 10MB. Accepted formats: PDF, JPG, PNG, DOCX.
                        </p>
                      </div>
                      
                      {/* Submit Button */}
                      <div>
                        <button 
                          type="submit" 
                          className="archive-btn-primary w-full md:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Submit Message"}
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contribution Guidelines */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-serif font-bold mb-6">Material Contribution Guidelines</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Documents</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                      <li>Original documents or high-quality scans</li>
                      <li>Include information about source and date</li>
                      <li>Provide context and background if available</li>
                      <li>All languages accepted, translations welcome</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Photographs</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                      <li>High-resolution scans of original photographs</li>
                      <li>Include date, location, and photographer if known</li>
                      <li>Identify individuals in the photo if possible</li>
                      <li>Provide permission for public display when applicable</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2">Oral Histories</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                      <li>Audio or video recordings in any format</li>
                      <li>Written transcripts if available</li>
                      <li>Biographical information about the interviewee</li>
                      <li>Signed consent for archiving and public access</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <p className="mt-6 text-sm text-gray-600">
                All contributed materials will be reviewed by our archival team. We may contact you for additional information or clarification. 
                Materials accepted into the archive will be properly preserved, cataloged, and made available for research and educational purposes 
                according to the preferences you specify.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
