const roomData = {
    standard: {
        name: "Standard Room",
        shortDescription: "A comfortable room with essential amenities for a pleasant stay.",
        description: `The Standard Hotel Room is designed with modern style and comfort in mind, 
        offering a welcoming space for both business and leisure travellers. Available in either 
        a double or twin-bed configuration, each room features clean lines, contemporary furnishings, 
        and a calming colour palette. Guests can enjoy comfortable bedding, a functional workspace, 
        and well-appointed amenities that ensure a relaxing stay. Thoughtful lighting and modern 
        finishes create a warm, uncluttered atmosphere, making the room ideal for unwinding after 
        a busy day. Practical yet stylish, the Standard Room provides everything needed for a 
        pleasant and restful hotel experience.`,
        price: 1500,
        images: [
            {path:"/images/standard-room1.jpeg", alt:"Image of Standard Room With Double Bed"},
            {path:"/images/twinroom1.jpeg", alt:"Image of Standard Room with Twin Beds"},
        ],
        amenities: [
            "Free Wi-Fi",
            "Flat-screen TV",
            "Mini Bar",
            "Room Service",
            "Ensuite Bathroom",
            "Kitchenette"
        ]
    },
     deluxe: {
        name: "Deluxe Room",
        shortDescription: "An elegant room with enhanced amenities and additional space for a luxurious stay.",
        description: `The Deluxe Hotel Room offers a refined blend of modern design, space, 
        and added convenience. Styled with contemporary finishes and elegant furnishings, each 
        room features a comfortable sleeping area complemented by a separate lounge space, ideal 
        for relaxing or entertaining. The fully equipped kitchenette allows guests the freedom 
        to prepare light meals, making the room perfect for extended stays. Thoughtful lighting, 
        premium bedding, and a calming colour palette create a welcoming atmosphere, while the 
        additional space and amenities elevate the overall experience for guests seeking comfort 
        with a touch of luxury.`,
        price: 2500,
        images: [
            {path:"/images/deluxe-room1.jpeg", alt:"Deluxe Room View of Bed with Lounge and Kitchenette in the background"},
            {path:"/images/deluxe-room2.jpeg", alt:"Deluxe Room View of Lounge Area and Bed in the background"},
        ],
        amenities: [
            "Free Wi-Fi",
            "Flat-screen TV",
            "Mini Bar",
            "Room Service",
            "Ensuite Bathroom"
        ]
    },
};

export const sharedImages = {
    amenities: {path:"/images/amenities.jpeg", alt:"Image of Hotel Amenities in Bathrooms" },
    bathTowels: {path:"/images/bath-towels.jpeg", alt:"Image of Cleaning Staff Holding Folded Bath Towels"},
    bathroom1: {path:"/images/bathroom1.jpeg", alt:"Image of a Bedroom Bathroom"},
    roomCoffee: {path:"/images/roomcoffee.jpeg", alt:"Pair of Coffee Mugs on a Tray on the Bad"},
    kitchenette: {path:"/images/kitchenette.jpeg", alt:"Toaster With Bread Slices in a Kitchenette"},
};

export default roomData;