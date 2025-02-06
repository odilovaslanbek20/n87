function click() {
  let slect = document.getElementById("functionSelect").value;
  let input = document.getElementById("arrayInput").value;
  let input2 = document.getElementById("arrayInput2").value;
  let result = document.getElementById("result");
  let nums = input.split(/[\s,]+/).map(Number);
  let nums2 = input2.split(/[\s,]+/).map(Number);

  switch (slect) {
    case "firstLast6":
      function firstLast6(nums, out) {
        out.innerHTML =
          nums.indexOf(6) == 0 || nums.lastIndexOf(6) == nums.length - 1;
      }
      firstLast6(nums, result);
      break;
    case "sameFirstLast":
      function sameFirstLast(nums, out) {
        out.innerHTML = nums.length >= 1 && nums[0] == nums[nums.length - 1];
      }
      sameFirstLast(nums, result);
      break;
    case "makePi":
      function makePi(nums, out) {
        if (nums.length == 0) {
          out.innerHTML = [3, 1, 4];
        } else {
          out.innerHTML = nums;
        }
      }
      makePi(nums, result);
      break;
    case "commonEnd":
      function commonEnd(a, b, out) {
        out.innerHTML =
          a.length >= 1 &&
          b.length >= 1 &&
          (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]);
      }

      commonEnd(nums, nums2, result);
      break;
    case "sum3":
      function sum3(nums, out) {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
          count += nums[i];
        }
        out.innerText = count;
      }
      sum3(nums, result);
      break;
    case "rotateLeft3":
      function rotateLeft3(nums, out) {
        let newArr = nums.slice(1).concat(nums[0]);
        out.innerHTML = newArr;
      }
      rotateLeft3(nums, result);
      break;
    case "reverse3":
      function reverse3(nums, out) {
        let a = nums.slice().reverse();
        out.innerHTML = a;
      }
      reverse3(nums, result);
      break;
    case "maxEnd3":
      function maxEnd3(nums, out) {
        if (nums[0] >= nums[nums.length - 1]) {
          out.innerHTML = [nums[0], nums[0], nums[0]];
        } else {
          out.innerHTML = [
            nums[nums.length - 1],
            nums[nums.length - 1],
            nums[nums.length - 1],
          ];
        }
      }
      maxEnd3(nums, result);
      break;
    case "sum2":
      function sum2(nums, out) {
        if (nums.length == 0) {
          out.innerHTML = 0;
        } else if (nums.length == 1) {
          out.innerHTML = nums[0];
        } else {
          out.innerHTML = nums[0] + nums[1];
        }
      }

      sum2(nums, result);
      break;

    default:
      result = "Siz inputga qiymat bermadingiz.";
      break;
  }
}

let btn = document.getElementById("btn");

btn.onclick = function () {
  click();
};
