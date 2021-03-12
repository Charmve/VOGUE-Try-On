function display(src_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")
	output.src = src_name

	if(src_name == "model0"){
		output.classList.add("hidden")
		model_image.classList.remove("hidden")
	}
	else{
		model_image.classList.add("hidden")
		output.classList.remove("hidden")
	}

}

function hover(id_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")
	if(id_name == "interpolatedResult"){
		output.classList.remove("hidden")
		model_image.classList.add("hidden")
	}
	else{
		model_image.classList.remove("hidden")
		output.classList.add("hidden")
	}
}

function noHover(id_name){
	output = document.getElementById("interpolatedResult")
	model_image = document.getElementById("modelBigImage")
	if(id_name == "interpolatedResult"){
		output.classList.add("hidden")
		model_image.classList.remove("hidden")
	}
	else{
		model_image.classList.add("hidden")
		output.classList.remove("hidden")
	}
}