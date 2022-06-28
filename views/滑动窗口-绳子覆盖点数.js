let  arr =[5,7,13,19]//需要排好序
let s = 10
function maxPoint2(arr,L) {
		let left = 0;
		let right = 0;
		let N = arr.length;
		let max = 0;
		while (left < N) {
			while (right < N && arr[right] - arr[left] <= L) {
				right++;
			}
			max = Math.max(max, right - (left++));
		}
		return max;
	}