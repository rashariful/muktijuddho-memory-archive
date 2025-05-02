
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";

const HomeContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: 'general',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll respond shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        inquiryType: 'general',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="archive-container">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-archive-green/10 text-archive-green mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to contribute to the Liberation War Archive? Get in touch with our dedicated team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="ml-2">
                  <p className="font-medium">Email:</p>
                  <a href="mailto:info@liberationwararchive.org" className="text-archive-green hover:underline">
                    info@liberationwararchive.org
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="ml-2">
                  <p className="font-medium">Phone:</p>
                  <a href="tel:+8801XXXXXXXX" className="text-archive-green hover:underline">
                    +8801850-273117
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select 
                      value={formData.inquiryType}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="contribution">Material Contribution</SelectItem>
                        <SelectItem value="research">Research Request</SelectItem>
                        <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="archive-btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactForm;
