// complete the given function

function palindrome(str){
let reversed = str.spit("").reverse().join("");
	if(str==reversed){
		return "true"
	}else{
		return "false"
	}
	
}
module.exports = palindrome
