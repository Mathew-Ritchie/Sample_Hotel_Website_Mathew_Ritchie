import React from "react";


export default function RestaurantPage() {
  return (
    <div className="pb-5 px-4 sm:px-10  md:px-20 lg:px-20">
      <h2
        className="text-3xl font-bold text-center pt-25 mb-5  md:mb-10"
      >
       Enjoy our breakfast daily
      </h2>
      <hr className="md:pt-5"></hr>
      <p className="py-5 text-justify">
        <img
          src="/images/breakfast1.jpeg"
          alt="Hout Bay Harbour"
          // Floating the image to the left with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-left sm:mr-4 mb-4 sm:mb-2"
        />
        Start your day with an inviting buffet breakfast designed to suit every taste. Guests are welcomed into a bright, comfortable dining space where the aroma of freshly brewed coffee and warm pastries sets the tone for a relaxed morning. Whether you’re preparing for a busy day of meetings or a leisurely day of exploration, the breakfast experience offers the perfect beginning.
      </p>
      <p className="pb-5 text-justify">
        <img
          src="/images/breakfast2.jpeg"
          alt="Hout Bay market"
          // Floating the image to the right with margin on larger screens
          className="rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 sm:float-right sm:ml-4 mb-4 sm:mb-2"
        />
        The buffet features a generous selection of hot and cold options, from classic cooked breakfast favourites to lighter continental choices. Freshly baked breads, seasonal fruits, cereals, yoghurts, and made-to-order eggs are complemented by a variety of juices and premium teas. Every item is carefully prepared to ensure quality, freshness, and satisfying flavour.
      </p>
      <p className="pb-5 text-justify md:pb-10 xl:pb-15">
        Thoughtfully arranged and regularly replenished, the breakfast buffet allows guests to enjoy their meal at their own pace. Friendly staff are on hand to assist while maintaining a calm, welcoming atmosphere. Whether enjoyed quickly or savoured slowly, the buffet breakfast delivers a comforting and convenient start to the day for every guest.
      </p>
      <hr></hr>
    </div>
  );
}
