const LinksSocialMedia = {
    github: 'BiancaMalta',
    youtube: 'channel/UC8ozobZ5QdLUq61Ot_LTvng',
    facebook: 'bianca.malta.395',
    instagram: 'atlam._/',
    twitter: 'atlam_'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            UserImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
getGitHubProfileInfos()
