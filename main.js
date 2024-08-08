function appendGithubIcon() {
  if (!document) return

  // @ts-ignore
  const repoTitle = document.title.replaceAll(' ', '_').toLowerCase() + '_lab'
  const link = document.createElement('a')
  link.href = 'https://github.com/codeworksacademy/' + repoTitle
  link.target = '_blank'
  link.title = 'View this repository on the CodeWorks® Academy github'

  const linkStyles = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '1rem',
    height: '40px',
    padding: '3px',
    display: 'flex',
    'aspect-ratio': '1/1',
    'background-color': 'black',
    'border-radius': '50%',
    'justify-content': 'center',
    'align-items': 'center',
  }

  for (const key in linkStyles) {
    link.style[key] = linkStyles[key]
  }

  const icon = document.createElement('i')
  icon.classList.add('mdi', 'mdi-github')

  const iconStyles = {
    'font-size': '2rem',
    color: 'white',
    'margin-bottom': 0
  }

  for (const key in iconStyles) {
    icon.style[key] = iconStyles[key]
  }

  link.append(icon)

  document.body.appendChild(link)
}

appendGithubIcon()