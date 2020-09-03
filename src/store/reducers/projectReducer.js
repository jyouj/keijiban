const initState = {
    projects: [
        {id: '1', title: 'Google', content: 'Gmail, YouTube, Google Drive'},
        {id: '2', title: 'Amazon', content: 'AWS, Amazon Go'},
        {id: '3', title: 'Facebook', content: 'Instagram, Whatsapp, Oculus'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;