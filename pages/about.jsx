import styles from '../styles/About.module.css'

function about() {
   const handleOpen=()=>{
    document.getElementById("myNav").style.height="100%";
   }
   function handleclose(){
    document.getElementById("myNav").style.height="0%";
   }

  return (
    <>
<div id="myNav" className={styles.overlay}>

<a href="javascript:void(0)" className={styles.closebtn} onClick={handleclose}>&times;</a>

<div className={styles.overlaycontent}>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

</div>
<span onClick={handleOpen}>open</span>
</>
)
}

export default about