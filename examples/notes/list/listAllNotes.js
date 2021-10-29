const { NotesService } = require("m3o/notes");

// List all the notes
async function listAllNotes() {
  let notesService = new NotesService(process.env.M3O_API_TOKEN);
  let rsp = await notesService.list({});
  console.log(rsp);
}

listAllNotes();
