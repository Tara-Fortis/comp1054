/* Original code

// STEP 6: Nab all the DETAIL elements
const details = document.querySelectorAll("details");

// STEP 7: Loop the details array and add event listener for toggle
details.forEach((detail) => {
	detail.addEventListener("toggle", (event) => {
		if (event.target.open) {
			details.forEach((detail) => {
				if (detail !== event.target) {
					// This is not the details element that was clicked open
					detail.removeAttribute("open");
				}
			})
		}
	})
})*/

// Refactored with Gemini 2.0
// Accordion behavior for <details> elements
document.querySelectorAll('details').forEach(detail => {
	detail.addEventListener('toggle', event => {
	  // Check if the current <details> element is open
	  if (event.target.open) {
		// If it's open, loop through all <details> elements
		document.querySelectorAll('details').forEach(otherDetail => {
		  // Check if the other <details> element is NOT the one that was just opened
		  if (otherDetail !== event.target) {
			// If it's a different <details> element, close it
			otherDetail.removeAttribute('open');
		  }
		});
	  }
	});
  });
  
  // STEP 9: Check in the browser console for errors, then proceed to CSS.