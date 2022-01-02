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
  ratings: { 1: '0', 2: '1', 3:'1', 4:'1', 5:'2' },
  recommended: {},
  characteristics: {}
}

// CASE 1 - No reviews exist for product
export const exampleReviewNone = {
  product: '10',
  page: '0',
  count: '5',
  results: []
}

// CASE 2 - Only one review exist for product
export const exampleReviewOne = {
  product: '10',
  page: '0',
  count: '5',
  results: [{
    review_id: '1',
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
    },
    {
      id: '2',
      url: 'urlplaceholder/review_5_photo_number_2.jpg'
    }]
  }]
}

// CASE 3 - There are multiple reviews
export const exampleReviews = {
  product: '10',
  page: '0',
  count: '5',
  results: [
    {
      review_id: '1',
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
      },
      {
        id: '2',
        url: 'urlplaceholder/review_5_photo_number_2.jpg'
      }]
    },
    {
      review_id: '2',
      rating: '4',
      summary: 'I am liking these glasses',
      recommended: 'false',
      response: 'Glad you\'re enjoying the product!',
      body: 'They are very dark. But that\'s good because I\'m in very sunny spots',
      date: '2019-04-14T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: '4',
      photos: []
    },
    {
      review_id: '3',
      rating: '2',
      summary: 'These broke very easily',
      recommended: 'false',
      response: 'Please let us know how we can fix the problem!',
      body: 'These were the flimsiest sunglasses I have ever bought!',
      date: '2017-05-14T00:00:00.000Z',
      reviewer_name: 'dontbuyspam',
      helpfulness: '1',
      photos: []
    },
    {
      review_id: '4',
      rating: '5',
      summary: 'These were an excellent buy',
      recommended: 'true',
      response: 'null',
      body: 'These were sturdy and perfect',
      date: '2020-01-14T00:00:00.000Z',
      reviewer_name: 'wanda',
      helpfulness: '5',
      photos: []
    },
    {
      review_id: '5',
      rating: '5',
      summary: 'So dark they were the best!',
      recommended: 'true',
      response: 'null',
      body: 'I love how dark they were!',
      date: '2015-01-14T00:00:00.000Z',
      reviewer_name: 'vision',
      helpfulness: '6',
      photos: []
    },
  ]
}