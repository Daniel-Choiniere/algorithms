function getIndexToIns(arr, num) {
  sorted = [];
  for (i=0; i<arr.length; i++) {
    if (arr[0] > arr[1]) {
      sorted = sorted.unshift()
      return sorted;
    }
  }
  //return num;
}

getIndexToIns([40, 60], 50);