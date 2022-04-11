<template>
  <section class="contact-section">
    <RouterLink class="back-button btn" to="/">
      <i class="fa-solid fa-chevron-left"></i>
    </RouterLink>

    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2>Contacte-me</h2>
        </div>
      </div>

      <div class="row">
        <div class="contact-info">
          <div class="contact-info-item">
            <h3>Email</h3>
            <a href="mailto:rodsilavieira@gmail.com?subject=Olá" target="_blank"
              >rodsilvavieira@gmail.com</a
            >
          </div>

          <div class="contact-info-item">
            <h3>Telefone</h3>
            <a href="https://wa.me/5592984262015" target="_blank"
              >(92) 98426-2015</a
            >
          </div>

          <div class="contact-info-item">
            <h3>Me siga</h3>

            <div class="social-links">
              <a href="https://github.com/rodsilvavieira2" target="_black">
                <i class="fab fa-github"></i>
              </a>

              <a href="https://twitter.com/rodsilvavieira" target="_black">
                <i class="fab fa-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/rodrigosilva7425/"
                target="_black"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/base.scss";

.contact-info,
.contact-form {
  width: 100%;
  padding: 0 15px;

  .input-group {
    width: 100%;
    margin-bottom: 30px;
  }

  .input-control {
    display: block;
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;

    font-family: inherit;
    font-weight: 400;
    font-size: 16px;

    background-color: $white-alpha-25-color;

    padding: 0 20px;
    color: $blue-dark-color;
    border: 1px solid transparent;
    transition: border-color 0.3s ease;

    outline: none;

    &:focus {
      border-color: $white-alpha-40-color;
    }

    &::placeholder {
      color: $blue-dark-color;
      opacity: 0.8;
      font-weight: 300;
    }
  }

  textarea.input-control {
    height: 120px;
    resize: none;
    padding-top: 15px;
  }
}

.contact-info-item {
  margin: 0 0 30px;
  padding: 0 0 0 20px;

  a {
    text-decoration: underline;
    color: inherit;
    font-weight: 400;

    transition: color 0.3s ease-in;

    &:hover {
      color: $main-color;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 5px;

    color: $main-color;
  }

  .social-links {
    margin-top: 10px;

    > a + a {
      margin-left: 15px;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      height: 40px;
      width: 40px;

      background-color: $white-alpha-25-color;
      color: $main-color;
      border-radius: 50%;
      border: 1px solid $white-alpha-40-color;

      transition: all 0.3s ease;

      &:hover {
        color: $white-color;
        background-color: $main-color;
      }
    }
  }
}
</style>
