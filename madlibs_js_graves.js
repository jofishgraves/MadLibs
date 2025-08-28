"use strict"

//Defined GUI Elements
const submitButton = document.getElementById("SubmitButton")
const next = document.getElementById("Next")

//GUI Events
submitButton.addEventListener("click", SubmitButtonPress)
next.addEventListener("click", NextStory)

//Global Variables
var indexVal = -1
var story = ""

//GUI Functions
function SubmitButtonPress()
{
	//User prompts
	let prompt1 = document.getElementById("UI1").value
	let prompt2 = document.getElementById("UI2").value
	let prompt3 = document.getElementById("UI3").value
	let prompt4 = document.getElementById("UI4").value
	let prompt5 = document.getElementById("UI5").value
	let prompt6 = document.getElementById("UI6").value

	let value = indexVal % 3
	let display = GetStory(value, prompt1, prompt2, prompt3, prompt4, prompt5, prompt6)
	DisplayStory(display)
	console.log("Printed prompts to story")
}

function NextStory()
{
	indexVal++
	SetStory()
	SetPrompts()
}

function SetStory()
{
	let storySpan = document.getElementById("story");
	let selectionSpan = document.getElementById("selection")
	let modVal = 0

	modVal = indexVal % 3
	switch(modVal)
	{
		case 0:
			story = "The Mischievious Dog"
			break
		case 1:
			story = "The Thirsty Pigeon"
			break;
		case 2:
			story = "The Fawn and His Mother"
			break;
		default:
			story = "?"
			break;
	}

	storySpan.innerHTML = story
	selectionSpan.innerHTML = story
}

function GetStory(value, prompt1, prompt2, prompt3, prompt4, prompt5, prompt6)
{
	let storyArray = 
	[`A [${prompt1}] used to run up quietly to the heels of everyone he met, and to [${prompt4}] them without notice. His master suspended a [${prompt3}] about his neck so that the [${prompt1}] might give notice of his presence wherever he went. Thinking it a mark of distinction, the [${prompt1}] grew proud of his [${prompt3}] and went [${prompt5}] it all over the marketplace. One day an old [${prompt6}] said to him: "Why do you make such an exhibition of yourself? That [${prompt3}] that you carry is not, believe me, any order of merit, but on the contrary a mark of disgrace, a public notice to all men to avoid you as an [${prompt2}] [${prompt1}]."`, 
	`A [${prompt1}], oppressed by excessive thirst, saw a goblet of [${prompt2}] painted on a [${prompt3}]. Not supposing it to be only a picture, she flew towards it with a loud whir and [${prompt6}] dashed against the [${prompt3}], jarring herself terribly. Having broken her [${prompt4}] by the blow, she fell to the ground, and was [${prompt5}] by one of the bystanders.`, 
	`A [${prompt1}] once said to his [${prompt2}], "You are larger than a dog, and swifter, and more used to [${prompt3}], and you have your [${prompt4}] as a defense; why, then, O [${prompt2}]! do the hounds frighten you so?" She smiled, and said: "I know full well, my son, that all you say is true. I have the advantages you mention, but when I hear even the [${prompt5}] of a single dog I feel ready to faint, and [${prompt6}] away as fast as I can."`]
	return storyArray[value]
}

function SetPrompts()
{
	//Prompts text
	let p1Span = document.getElementById("p1")
	let p2Span = document.getElementById("p2")
	let p3Span = document.getElementById("p3")
	let p4Span = document.getElementById("p4")
	let p5Span = document.getElementById("p5")
	let p6Span = document.getElementById("p6")
	let value = indexVal % 3
	let display = ""

	switch(value)
	{
		case 0:
			p1Span.innerHTML = "An animal: "
			p2Span.innerHTML = "An adjective to describe the animal: "
			p3Span.innerHTML = "An object: "
			p4Span.innerHTML = "A verb: "
			p5Span.innerHTML = "Another verb: "
			p6Span.innerHTML = "A person or animal: "
			display = GetStory(value, "An animal", "An adjective to describe the animal", "An object", "A verb", "Another verb", "A person or animal")
			break
		case 1:
			p1Span.innerHTML = "A type of bird: "
			p2Span.innerHTML = "A type of liquid: "
			p3Span.innerHTML = "An object: "
			p4Span.innerHTML = "A body part: "
			p5Span.innerHTML = "A verb: "
			p6Span.innerHTML = "An adverb that ends in -ly: "
			display = GetStory(value, "A type of bird", "A type of liquid", "An object", "A body part", "A verb", "An adverb that ends in -ly")
			break
		case 2:
			p1Span.innerHTML = "An animal or person: "
			p2Span.innerHTML = "A family member: "
			p3Span.innerHTML = "An action: "
			p4Span.innerHTML = "A body part or weapon: "
			p5Span.innerHTML = "An action: "
			p6Span.innerHTML = "A verb: "
			display = GetStory(value, "An animal or person", "A family member", "An action", "A body part or weapon", "An action", "A verb")
			break
	}

	DisplayStory(display)
}

function DisplayStory(display)
{
	let displaySpan = document.getElementById("display")

	if(display != undefined)
		{
			displaySpan.innerHTML = display
		} 
		else
		{
			displaySpan.innerHTML = "Please select a story before submitting prompts!"
		}
}

DisplayStory()


