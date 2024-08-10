let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#3576c6"</span>Desarrolladora de software y promotora de la participación juvenil.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
