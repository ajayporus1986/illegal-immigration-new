export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry"
];

export const STATE_CITY_MAP: { [key: string]: string[] } = {
    "Andaman and Nicobar Islands": ["Port Blair", "Diglipur", "Mayabunder", "Rangat"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Pasighat"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Haryana": ["Faridabad", "Gurugram", "Panipat", "Ambala", "Hisar"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Solan", "Kullu"],
    "Jammu and Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City"],
    "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi-Dharwad", "Belagavi"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
    "Ladakh": ["Leh", "Kargil"],
    "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Manipur": ["Imphal", "Churachandpur", "Thoubal"],
    "Meghalaya": ["Shillong", "Tura", "Jowai"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
    "Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"],
    "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Prayagraj"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rishikesh"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
};

// Pincodes for high-risk areas (border districts, major transit hubs)
export const HIGH_RISK_PINCODES: string[] = [
    // Jammu & Kashmir (Border areas)
    "193101", "193301", "181201",
    // Punjab (Border areas)
    "143601", "152024", 
    // Rajasthan (Border areas)
    "334001", "345001",
    // West Bengal (Border areas)
    "734001", "735101",
    // Major Transit Hubs
    "110001", // New Delhi
    "400001", // Mumbai
    "700001", // Kolkata
    "600001", // Chennai
];

// Map of state HQs for simulated email notifications
export const STATE_POLICE_EMAILS: { [key: string]: string } = {
    "Jammu and Kashmir": "dgp.jk@gov.in.simulated",
    "Punjab": "dgp.pb@gov.in.simulated",
    "Rajasthan": "dgp.rj@gov.in.simulated",
    "West Bengal": "dgp.wb@gov.in.simulated",
    "Delhi": "cp.dl@gov.in.simulated",
    "Maharashtra": "dgp.mh@gov.in.simulated",
    "Tamil Nadu": "dgp.tn@gov.in.simulated",
    // Add other states as needed
};