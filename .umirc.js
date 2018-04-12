export default {
  plugins: [
    [
      'umi-plugin-dva', 
      { 
        immer: true 
      }
    ],
    [
      'umi-plugin-dll', 
      {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch"],
      }
    ],
  ],
}
