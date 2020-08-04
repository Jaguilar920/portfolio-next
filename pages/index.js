import Link from 'next/link'


const Index = () => (
    <body>
<header>
                        <h1>Jacob Aguilar</h1>
                        <div className="navi">
                        <ul className="nav nav-tabs nav-fill">
                            <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Jaguilar920">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/jacob-aguilar-5886b31a0/">LinkedIn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://docs.google.com/document/d/1eKiwgar8TKQUsYE-toLvOplaB6eC4RYvWP-1ZDMjizw/edit?usp=sharing">Resume</a>
                            </li>
                            
                        </ul>
                        </div>
                        
                    </header>
<div className="container">
    <div className="marg">
    
    
        <head>
        <title>Jacob Aguilar</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
                    
                    <link rel="stylesheet" href="./components/style.css"/>
        </head>
        
        <br/>
        <fieldset className="character-info">
            <legend><h2>About Me</h2></legend>
            <br/>
            <h4>I'm a student</h4>
            <div>First and foremost, I'm a student. I am always willing and driving to learn more. In this profession there is so much to learn and that can be done to improve. I seek to hone in and refine my skills as much as possible. There are always new languages to learn and new tools to put under my belt, and I have the drive to learn!</div>
            <br/>
            <br/>
            <h4>Experience</h4>
            <div>I started out learning the arts of manufacturing. I originally learned to program CNC machines in a high stress environment before switching my focus to software engineering. I have done hours upon hours of crafting websites both formal and personal using new techniques I have picked up along the way. I am excited to see what more I will create in the future.</div>
        </fieldset>
        <br/>
    <fieldset className="character-info">
    <legend><h2>Recent Projects</h2></legend>

<div className="card"> 
<div className="card-body shadow">
<h4 className="card-title">First Website</h4>
<p className="card-text">
This was my very first website project! In this project I focused on practicing the moving of data across different elements in unison.
</p>
<a href="https://jaguilar920.github.io/" className="btn btn-primary">View Project</a>
</div>
</div>

<br/>

<div className="card">
<div className="card-body shadow">
<h4 className="card-title">DND Express</h4>
<p className="card-text">In this project I create my first express app project. I display my ability to create a full crud app to create, edit, delete, and view character forms.</p>
<a href="#" class="btn btn-primary">View Project</a>
</div>
</div>

<br/>

<div className="card shadow">
<div className="card-body">
<h4 className="card-title">DND Full Project</h4>
<p className="card-text">This is the current progress of a full project I am working on. It will be a fully functioning DND Helper complete with character creation, combat simulations and skill creation.</p>
<a href="#" className="btn btn-primary">View Project</a>
</div>
</div>
    </fieldset>
    <style>{`.container {
    background-color: white;
    width: 80%;
    min-height: 100vh;
    height: auto;
    display: relative;
    margin: auto;
    padding: 0px;
}
body {
    background-color: white;
    

}
header {
    background-color: black;
    opacity: .75;
}
h3 {
    color: darkgrey;
}
h1 {
    color: whitesmoke;
    text-align: center;
}
h2 { 
    text-align: center;
    color: black;
}
ul {
    list-style-type: none;
  }


fieldset {
    border: 1px solid black;
    border-radius: 3px;
    padding: 20px;
    margin: 15px 0;  
}

legend {
    padding: 0 10px;
    font-weight: 500;
    color: black;
}

label {
    font-weight: 200;
    color: black;
    display: block;
}

input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid darkred;
}

input:focus {
outline-color: red;
}

Input[type="submit"] {
    height: 50px;
    width: 150px;
    background: black;
    box-shadow: 2px 2px darkgray;
    color: red;
    transition: .2s eas-in-out;

}

.BG {
    height: 200px;
}

.custom-select {
    width: 40%;
    margin: 10px 0;
    box-sizing: border-box;
    border: 2px solid darkred;
}
.custom-select:hover {
    outline-color: red;
}

Input[type="submit"]:hover {
    cursor: pointer;
    border: 2px;
    background-color: red;
    color: black;
    border-color: white;
}

.form-control-file {
    border: 0px;
}

.custom-range {
    border: 0px;
}

textarea {
    resize:vertical;

}
.icon {
    height: 64px;
    width: 64px;
}
textarea:focus {
    outline-color: red;
}

.CharName {
    width: 40%;
}

.levelSel {
    width: 15%;
}
.navi {
    align-content: center;
}

.container {
    width: 70%;
    position: center;
}



`}</style>
</div>
    </div>
    
    
</body>
)


export default Index;