function largestSubarraySum(array){
  let sub = []
  // for(let i = 0; i < array.length; i++){
    
  // }
  let first = array.slice(0, 2)
  let sumo = first.reduce((sum, n) => { sum + n }, 0)
  return sumo
}