<template>
  <div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/atlassian.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">Atlassian</h2>
              <a
                href="https://www.atlassian.com/software/statuspage"
                target="_blank"
              >
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-heart']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label">STATUSPAGE</span>
            <p>
              We use
              <a
                href="https://www.atlassian.com/software/statuspage"
                target="_blank"
                >Statuspage</a
              >
              by Atlassian for our status page (<a
                href="https://status.rtbyte.xyz/"
                target="_blank"
                >status.rtbyte.xyz</a
              >) to display and notify our users of any downtime, maintenance,
              or other incidents related to RTByte and any of its services.
              We've been granted an open-source license by Atlassian.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/crowdin.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">Crowdin</h2>
              <a href="https://crowdin.com/" target="_blank">
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-heart']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label"
              >LOCALIZATION MANAGEMENT</span
            >
            <p>
              We use
              <a href="https://crowdin.com/" target="_blank">Crowdin</a>
              to manage localization for RTByte and its services. Our Crowdin
              page can be found at
              <a href="https://translate.rtbyte.xyz/" target="_blank"
                >translate.rtbyte.xyz</a
              >. We've been granted an open-source license by Crowdin.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/digitalocean.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">DigitalOcean</h2>
              <a href="https://m.do.co/c/cb1c8103a3b0" target="_blank">
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-usd']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label">HOSTING PROVIDER</span>
            <p>
              We use
              <a href="https://m.do.co/c/cb1c8103a3b0" target="_blank"
                >DigitalOcean</a
              >
              to host RTByte and manage the DNS settings for the
              <a href="https://rtbyte.xyz/">rtbyte.xyz</a>
              domain. To host the bot, we use a droplet (scalable virtual
              machine) in the London region. We are a paying customer of
              DigitalOcean.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/firebase.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">Firebase</h2>
              <a href="https://firebase.google.com" target="_blank">
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-heart']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label"
              >WEB APPLICATION PLATFORM</span
            >
            <p>
              We use the web hosting solution in
              <a href="https://firebase.google.com" target="_blank">Firebase</a>
              to host this website. Firebase is a Google service made functional
              by
              <a href="https://cloud.google.com/" target="_blank"
                >Google Cloud Platform</a
              >, and acts as a BaaS (Backend as a Service). We are currently
              within the limits of Firebase's free tier.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/fontawesome.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">Font Awesome</h2>
              <a href="https://fontawesome.com/" target="_blank">
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-usd']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label">ICON SET & TOOLKIT</span>
            <p>
              We use
              <a href="https://fontawesome.com/" target="_blank"
                >Font Awesome</a
              >
              Pro for the icons used across all our services. We are a paying
              customer of Font Awesome.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/sentry.svg" />
          <div class="sponsor-details">
            <div class="title-container">
              <h2 class="sponsor-title">Sentry</h2>
              <a href="https://sentry.io/" target="_blank">
                <font-awesome-icon
                  :icon="['fad', 'hand-holding-heart']"
                  class="sponsor-title sponsor-icon"
                />
              </a>
            </div>
            <span class="about-label sponsor-label"
              >ERROR MONITORING & TRACKING</span
            >
            <p>
              We use
              <a href="https://sentry.io/" target="_blank">Sentry</a>
              to more easily track errors so that we can diagnose and fix them
              as soon as possible. We've been granted an open-source license by
              Sentry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorAbout"
};
</script>
