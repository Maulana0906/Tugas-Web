document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton")


downloadButton.addEventListener("click", () => {
        const cvPath = "Vecteezy-License-Information.pdf";

        const link = document.createElement("a");
        link.href = cvPath;

        link.download = "Vecteezy-License-Information.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
