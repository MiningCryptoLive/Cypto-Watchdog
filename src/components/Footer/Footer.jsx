import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright @ 2020 - <span id="spanYear"></span> All Right Reserved.</p>
    </div>
  )
}
<script>
  $('#spanYear').html(new Date().getFullYear());
</script>
export default Footer
