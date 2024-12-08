let linkPortionList = []

function newBtnClick(){
  let playLink = document.querySelector('.new-box').value;
  let index = 34;
  let linkPortion = playLink.substr(index, 22);

  linkPortionList.push(linkPortion);

  let finalifameList =''
  for (let i = 0; i < linkPortionList.length; i++) {


    let iframeList = `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/${linkPortionList[i]}?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `


    finalifameList = finalifameList + iframeList;
    document.querySelector('.frame-div').innerHTML = finalifameList
}
}



function openFullscreen() {
  const elm = document.querySelector('body');
  elm.requestFullscreen();
}