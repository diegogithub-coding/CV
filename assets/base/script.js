var age = $("#age");
var timeDiff = Math.abs((new Date()).getTime() - (new Date("02/14/1996")).getTime());
age.text(Math.floor(timeDiff / (1000 * 3600 * 24 *365)) + " Años");
var difdt = new Date(new Date() - new Date('02/14/1996'));
var days = difdt.getDate() - (difdt.getMonth() != 0 ? 0 : 1);
/*age.text((difdt.toISOString().slice(0, 4) - 1970) + " Años" +
          (difdt.getMonth() != 0 ? ", " + difdt.getMonth() + " Mes" + (difdt.getMonth() == 1 ? "" : "es") : "") +
          (days != 0 ? " y " + days + " Día" + (days == 1 ? "" : "s") : ""));*/

age.text((difdt.toISOString().slice(0, 4) - 1970) + " Años");
        // Function to generate and download the image
        function generateImage() {
            // Get the entire HTML content of the page
            const htmlContent = document.documentElement;

            // Use html2canvas to capture the content as an image
            html2canvas(htmlContent).then(function(canvas) {
                // Convert the canvas to an image data URL
                const imageDataURL = canvas.toDataURL("image/png");

                // Create a temporary link element to trigger the download
                const downloadLink = document.createElement("a");
                downloadLink.href = imageDataURL;
                downloadLink.download = "your-website-image.png";

                // Append the link to the document and click it programmatically to trigger the download
                document.body.appendChild(downloadLink);
                downloadLink.click();

                // Clean up by removing the temporary link element
                document.body.removeChild(downloadLink);
            });
        }