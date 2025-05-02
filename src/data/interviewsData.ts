
// Sample interviews data
export const interviews = [
  {
    id: "int1",
    name: "Abdul Haque",
    role: "Freedom Fighter",
    location: "Dhaka",
    category: "military",
    summary: "Discusses his experiences fighting in Sector 2 and the liberation of Dhaka.",
    duration: "1:24:35",
    recordedDate: "June 12, 2010",
    thumbnailUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80",
  },
  {
    id: "int2",
    name: "Dr. Nusrat Hossain",
    role: "Medical Volunteer",
    location: "Chittagong",
    category: "civilian",
    summary: "Recounts providing medical aid to wounded freedom fighters and civilians during the war.",
    duration: "58:22",
    recordedDate: "August 8, 2012",
    thumbnailUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    id: "int3",
    name: "Farid Ahmed",
    role: "Student Activist",
    location: "Rajshahi",
    category: "political",
    summary: "Describes organizing student protests and his involvement in the resistance movement.",
    duration: "1:12:06",
    recordedDate: "March 14, 2015",
    thumbnailUrl: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?auto=format&fit=crop&q=80",
  },
  {
    id: "int4",
    name: "Rahima Begum",
    role: "Refugee",
    location: "Kolkata",
    category: "civilian",
    summary: "Shares her family's journey as refugees to India and their experiences in the refugee camps.",
    duration: "45:50",
    recordedDate: "December 5, 2011",
    thumbnailUrl: "https://images.unsplash.com/photo-1580820267682-426da823b514?auto=format&fit=crop&q=80",
  },
  {
    id: "int5",
    name: "Major (Retd.) Ziaur Rahman",
    role: "Military Officer",
    location: "Chittagong",
    category: "military",
    summary: "Details military strategies and operations during the critical months of the war.",
    duration: "2:05:18",
    recordedDate: "October 22, 2014",
    thumbnailUrl: "https://images.unsplash.com/photo-1541959833400-049d37f98cfc?auto=format&fit=crop&q=80",
  },
  {
    id: "int6",
    name: "Monowara Begum",
    role: "War Victim",
    location: "Khulna",
    category: "civilian",
    summary: "Testimony of surviving violence and the impact of war on civilian populations.",
    duration: "1:03:45",
    recordedDate: "July 17, 2016",
    thumbnailUrl: "https://images.unsplash.com/photo-1605013343009-c16ee71f2a66?auto=format&fit=crop&q=80",
  },
  {
    id: "int7",
    name: "Professor Anisuzzaman",
    role: "Intellectual",
    location: "Dhaka University",
    category: "cultural",
    summary: "Discusses the cultural and intellectual resistance during the Liberation War.",
    duration: "1:37:20",
    recordedDate: "February 8, 2013",
    thumbnailUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80",
  },
  {
    id: "int8",
    name: "Kamal Hossain",
    role: "Diplomat",
    location: "New Delhi",
    category: "political",
    summary: "Recounts diplomatic efforts to gain international support for Bangladesh's independence.",
    duration: "1:15:55",
    recordedDate: "April 30, 2018",
    thumbnailUrl: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80",
  }
];

export interface Interview {
  id: string;
  name: string;
  role: string;
  location: string;
  category: "military" | "civilian" | "political" | "cultural";
  summary: string;
  duration: string;
  recordedDate: string;
  thumbnailUrl: string;
}
