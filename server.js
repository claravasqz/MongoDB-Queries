// ----sampleData 


//  1. - Sample Data => mflix => movies
// Sort Data by Quentin Tarqantino and Drama
// { $and: [{directors: "Quentin Tarantino"}, {genres: "Drama"} ] }

//  2. - Sample Data => mflix => movies
// Sort Data by Steven Spielberg or is a Sci-Fi
// { $or: [{directors: "Steven Spielberg"}, {genres: "Sci-Fi"} ] }

//  3. - Sample Data => restaurants => restaurant
// Sort Data that is not in Brooklyn and not an italian Restaurant
// {$nor: [{borough:"Brooklyn"}, {cuisine: "Italian"}]}

//  4. - Sample Data => Restaurants => restaurant
// Sort Data that is not in Brooklyn, Queens or Staten Island
// {$nor: [{borough:"Brooklyn"}, {borough:"Staten Island"}, {borough:"Queens"}]}

//  5. - Sample Data => airbnb 
// Sort Data by houses of 5 bedrooms
// {bedrooms: {$eq: 5}}

//  6. - Sample Data => airbnb
// Sort Data by Houses of not minimum of 2 nigths
// {minimum_nights: {$ne:2 }}

//  7. - Sample Data => airbnb
// Sort Data by Houses of a price range between 50$ and 100$
// {$and: [{price: {$gt:50.00}}, {price: {$lt:100.00}}]}

//  8. - Sample Data => airbnb
// Sort Data by Houses with a range of beds between 6-10 
// {$and: [{beds:{$gt:6}}, {beds:{$lt:10}}]}

//  9. - Sample Data => airbnb
// Sort Data by Houses or Apartments with 3 Bedrooms and 3 Bathroons
// {$and: [{property_type: {$in:["Apartment", "House"]}}, {beds: 3}, {bathrooms: 3}]

//  10. - Sample Data => mflix => movies
// Sort Data by movies of the genre Horror, Sci-Fi or Thriller
// {genres:{$in:["Thriller", "Sci-Fi", "Horror"]}}