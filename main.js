function appendGithubIcon() {
  if (!document) return

  // @ts-ignore
  const repoTitle = document.title.replaceAll(' ', '_').toLowerCase() + '_lab'
  const link = document.createElement('a')
  link.href = 'https://github.com/codeworksacademy/' + repoTitle
  link.target = '_blank'
  link.title = 'View this repository on the CodeWorks® Academy github'

  const icon = document.createElement('i')
  icon.classList.add('mdi', 'mdi-github')
  const styles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '1rem',
    'font-size': '2rem',
    color: 'white',
    'background-color': 'black',
    'border-radius': '1000%',
    padding: '3px',
  }

  for (const key in styles) {
    const value = styles[key];
    icon.style[key] = value
  }

  link.append(icon)

  document.body.appendChild(link)
}

appendGithubIcon()