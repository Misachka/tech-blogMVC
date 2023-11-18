// function to load the content
document.addEventListener('DOMContentLoaded', function () {
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create BlogPost');
    }
  }
};

//delete blog
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete Blog');
    }
  }
};

// new blog btn
const newBlogForm = document.querySelector('.new-blog-form');
if (newBlogForm) {
  newBlogForm.addEventListener('submit', newFormHandler);
}
//delete btn
const deleteButtons = document.querySelectorAll('.delete-blog');

deleteButtons.forEach((button) => {
  button.addEventListener('click', delButtonHandler);
});

});