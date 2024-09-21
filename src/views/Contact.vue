<!-- src/views/Contact.vue -->
<template>
  <div class="contact content-container">
    <div class="tabs-container">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="currentTab = tab.key"
        :class="['tab-button', { active: currentTab === tab.key }]"
      >
        {{ tab.label }}
      </button>
    </div>

    <ContactTab
      :tab="currentTab"
      :contacts="currentContacts"
      @copy-to-clipboard="copyToClipboard"
    />
  </div>
</template>
