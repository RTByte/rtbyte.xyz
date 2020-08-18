<template>
  <div>
    <div class="page-content">
      <div class="content-wrapper">
        <div class="sponsor">
          <img class="sponsor-img" src="@/assets/sponsors/atlassian.svg" />
          <div class="sponsor-details">
            <h2 class="sponsor-title">Atlassian</h2>
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
              We've been granted an open-source license by Atlassian for this.
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
            <h2 class="sponsor-title">Crowdin</h2>
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
              >. We've been granted an open-source license by Crowdin for this.
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
