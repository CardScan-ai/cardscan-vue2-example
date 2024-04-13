<template>
  <div>
    <button v-if="!showScanView" @click="handleClick" style="margin-top: 60px">Scan Card</button>
    <wrapped-card-scan-view v-else logging="off" :sessionToken="sessionToken" :onSuccess="cardScanSuccess"
      :onCancel="cardScanCancel" :onError="cardScanError" :enableCameraPermissionModal="true" />

  </div>
</template>

<script>
import Vue from 'vue';
import { CardScanView, CardScanModel } from '@cardscan.ai/insurance-cardscan-react';
import { VuePlugin } from 'vuera';

Vue.use(VuePlugin);

export default {
  components: {
    'wrapped-card-scan-view': CardScanView
  },
  data() {
    return {
      showScanView: false,
      sessionToken: ""
    };
  },

  methods: {
    cardScanSuccess(card) {
      console.log(card);
    },
    cardScanCancel() {
      this.showScanView = false;
    },
    cardScanError(error) {
      console.log('Error Callback: ', error);
    },
    handleClick() {
      this.showScanView = true;
    },
    fetchToken() {
      const apiKey = 'API_KEY';
      const CARDSCAN_SERVER = 'https://sandbox.cardscan.ai/v1';
      if (apiKey) {
        fetch(`${CARDSCAN_SERVER}/access-token?user_id=demo_user`, {
          headers: { Authorization: `Bearer ${apiKey}` }
        })
          .then(res => res.json())
          .then(data => {
            this.sessionToken = data.Token;
          })
          .catch(err => console.log(err));
      }
    },
  },
  mounted() {
    CardScanModel.warm();
    this.fetchToken();
  }
}
</script>
