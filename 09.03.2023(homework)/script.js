fetch('https://reqres.in/api/users?page=2')
    .then(resp => resp.json())
    .then(data => render(data.data))


    const container = document.querySelector('.container')


    const render = (arr) => {
        arr.forEach(({first_name, last_name, email, avatar}) => {
            const elemContent = document.createElement('div')
            const elemName = document.createElement('p')
            const elemEmail = document.createElement('a')
            const elemImg = document.createElement('img')

            elemName.innerText = `${first_name}  ${last_name}`
            elemEmail.innerText = email
            elemEmail.href = `mailto:${email}`;
            elemImg.src = avatar
            elemImg.classList.add('avatar')
            elemImg.alt = `${first_name} ${last_name}`;

            elemContent.append(elemName, elemEmail, elemImg)
            container.append(elemContent)
        });
    }