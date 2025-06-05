
<form action="https://getform.io/f/bmdmydra" method="POST" class="max-w-md mx-auto p-6 bg-white rounded shadow-md space-y-4">
  <h2 class="text-2xl font-bold mb-4 text-center">Contact Me</h2>

  <div>
    <label for="name" class="block font-semibold">Name:</label>
    <input type="text" name="name" id="name" required
      class="w-full border border-gray-300 rounded p-2" />
  </div>

  <div>
    <label for="email" class="block font-semibold">Email:</label>
    <input type="email" name="email" id="email" required
      class="w-full border border-gray-300 rounded p-2" />
  </div>

  <div>
    <label for="phone" class="block font-semibold">Phone:</label>
    <input type="text" name="phone" id="phone" required
      class="w-full border border-gray-300 rounded p-2" />
  </div>

  <div>
    <label for="message" class="block font-semibold">Message:</label>
    <textarea name="message" id="message" rows="4" required
      class="w-full border border-gray-300 rounded p-2"></textarea>
  </div>

  <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
    Send Message
  </button>
</form>
