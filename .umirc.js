export default {
  plugins: [
    'umi-plugin-dva', 
    [
      'umi-plugin-dll', 
      {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch"],
      }
    ],
  ],
}
