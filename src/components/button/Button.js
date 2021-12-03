

const displayUserIfAuth = (param) => {
    return (
        <button class={param.className} onClick={() => param.path}>{param.name}</button>
    )}


