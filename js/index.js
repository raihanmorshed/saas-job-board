document.querySelector(".button-container").addEventListener("click", () => {
    let text = document.getElementById("filter-jobs").value;
    //console.log(text);
})

function getJobs() {
    return fetch("data.json").then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
}

function showJobs(jobs) {
    console.log(jobs);
    let jobsContainer = document.querySelector(".jobs-container");
    // console.log(jobsContainer);
    let jobsHTML = "";
    jobs.forEach(job => {
        // console.log(job);

        jobsHTML += `
        <div class="job-title">
        <div class="top">
        <img src="${job.logo}" />
        //    <i class="fa-solid fa-swatchbook"></i>
           <span class="material-icons more_horiz"> more_horiz</span>
        </div>
        <div class="rolename">
            <span>${job.roleName}</span>
        </div>
        <div class="description">
            <span> ${job.requirements.content}</span>
        </div>
        <div class="buttons">
            <div class="button apply-no w">
                Apply Now
            </div>
            <div class="button">
                Message
            </div>
        </div>
    </div>
   
   `
    });
    console.log(jobsHTML);
}




getJobs().then(data => {
    showJobs(data);
});