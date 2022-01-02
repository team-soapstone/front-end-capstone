/**
 * Example data for tests. Review and review metadata is for the 1st example product.
 * Ensure product id's align when doing testing otherwise tests will fail.
 */

export const exampleProducts = [
  {
    id: '10',
    name: 'Midnight Shades',
    slogan: 'See the darkness',
    description: 'So dark you won\'t see any lights!.',
    category: 'Sunglasses',
    default_price: '1000'
  },
  {
    id: '11',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140'
  }

];

export const exampleReviewMetaData = {
  product_id: '10',
  ratings: { 1: '0', 2: '1', 3:'3', 4:'5', 5:'1' },
  recommended: {},
  characteristics: {}
}

export const exampleReviews = {
  product: '10',
  page: '0',
  count: '5',
  results: [
    {
      review_id: '5',
      rating: '3',
      summary: 'I\'m enjoying wearing these shades',
      recommended: 'false',
      response: 'null',
      body: 'comfortable and practical',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'shortandsweeet',
      helpfulness: '5',
      photos: [{
        id: '1',
        url: 'urlplaceholder/review_5_photo_number_1.jpg',
      }]
    }
  ]
}