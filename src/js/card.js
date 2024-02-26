export default class Card {
  constructor(data) {
    this.data = data;
    this.imageSource = data.webformatURL || '';
    this.likes = data.likes || 0;
    this.views = data.views || 0;
    this.comments = data.comments || 0;
    this.downloads = data.downloads || 0;
  }

  newCard() {
    const col = document.createElement('div');
    col.classList.add('col-md-3', 'col-lg-3');

    const card = document.createElement('div');
    card.classList.add('card', 'd-flex', 'flex-column', 'm-3');
    card.style.width = '20rem';
    card.style.height = 'fit-content';
    col.appendChild(card);

    const imageLink = document.createElement('a');
    imageLink.href = this.imageSource;
    card.appendChild(imageLink);

    const image = document.createElement('img');
    image.src = this.imageSource;
    image.setAttribute('data-source', this.imageSource);
    image.loading = 'lazy';
    image.classList.add('card-img-top');
    imageLink.appendChild(image);

    const info = document.createElement('div');
    info.classList.add('card-body', 'd-flex', 'justify-content-around');
    card.appendChild(info);

    const divLikes = document.createElement('div');
    divLikes.title = 'Likes';
    divLikes.classList.add('d-flex', 'flex-column', 'align-items-center');
    info.appendChild(divLikes);

    const likesSpan = document.createElement('span');
    likesSpan.style.fontSize = '25px';
    likesSpan.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
    divLikes.appendChild(likesSpan);

    const likeCount = document.createElement('p');
    likeCount.classList.add('info-item', 'card-text');
    likeCount.textContent = this.likes;
    divLikes.appendChild(likeCount);

    const divViews = document.createElement('div');
    divViews.title = 'Views';
    divViews.classList.add('d-flex', 'flex-column', 'align-items-center');
    info.appendChild(divViews);

    const viewsSpan = document.createElement('span');
    viewsSpan.style.fontSize = '25px';
    viewsSpan.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    divViews.appendChild(viewsSpan);

    const viewCount = document.createElement('p');
    viewCount.classList.add('info-item');
    viewCount.textContent = this.views;
    divViews.appendChild(viewCount);

    const divComments = document.createElement('div');
    divComments.title = 'Comments';
    divComments.classList.add('d-flex', 'flex-column', 'align-items-center');
    info.appendChild(divComments);

    const commentsSpan = document.createElement('span');
    commentsSpan.style.fontSize = '25px';
    commentsSpan.innerHTML = `<i class="fa-solid fa-comments"></i>`;
    divComments.appendChild(commentsSpan);

    const commentCount = document.createElement('p');
    commentCount.classList.add('info-item');
    commentCount.textContent = this.comments;
    divComments.appendChild(commentCount);

    const divDownload = document.createElement('div');
    divDownload.title = 'Downloads';
    divDownload.classList.add('d-flex', 'flex-column', 'align-items-center');
    info.appendChild(divDownload);

    const downloadSpan = document.createElement('span');
    downloadSpan.style.fontSize = '25px';
    downloadSpan.innerHTML = `<i class="fa-solid fa-download"></i>`;
    divDownload.appendChild(downloadSpan);

    const downloadCount = document.createElement('p');
    downloadCount.classList.add('info-item');
    downloadCount.textContent = this.downloads;
    divDownload.appendChild(downloadCount);

    return card;
  }
}
