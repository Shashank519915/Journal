// fetchCommand.js
const fs = require('fs');

module.exports = {
  name: 'fetch',
  description: 'Fetch old journals by date',
  execute(message) {
    const requestedDate = message.content;

    fs.readFile('journal.json', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const journalData = JSON.parse(data);
      const requestedJournal = journalData.find(
        (entry) => entry.date === requestedDate
      );

      if (requestedJournal) {
        message.channel.send(`Journal entry for ${requestedDate}: \n\`\`\`${requestedJournal.content}\`\`\``);
      } else {
        message.channel.send(`No journal entry found for ${requestedDate}`);
      }
    });
  },
};
