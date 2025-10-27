const cds = require('@sap/cds');
const { readCredential, writeCredential, deleteCredential, getRequiredCredentials } = require('./cred');

module.exports = cds.service.impl(async (srv) => {

  /**
   * READ existing credential from BTP Credential Store
   */
  srv.on('fnCallCredStore', async (req) => {
    try {
      const res = await readCredential("aribabtp", "password", "aribabtp_2sv");
      console.log("✅ Read credential:", res);
      return [ `Read successful for aribabtp_2sv: ${res ? 'value found' : 'no value'}` ,res];
    } catch (error) {
      console.error("❌ Read failed:", error.message);
      return [ `Read failed: ${error.message}` ];
    }
  });

  /**
   * CREATE new credential in BTP Credential Store
   */
  srv.on('fnCallCreate', async (req) => {
    try {
      const result = await writeCredential(
        "aribabtp",       // namespace
        "password",       // type
        "aribabtp_new",   // name
        "Secret@123",     // value
        "Created from CAPM"
      );
      return [ "✅ Credential created successfully" ];
    } catch (error) {
      console.error("❌ Create failed:", error.message);
      return [ `Create failed: ${error.message}` ];
    }
  });

  /**
   * UPDATE existing credential
   * (same function as create, since writeCredential uses PUT)
   */
  srv.on('fnCallUpdate', async (req) => {
    try {
      const result = await writeCredential(
        "aribabtp",       // namespace
        "password",       // type
        "aribabtp_new",   // name
        "Secret@456",     // new value
        "Updated from CAPM"
      );
      return [ "✅ Credential updated successfully" ];
    } catch (error) {
      console.error("❌ Update failed:", error.message);
      return [ `Update failed: ${error.message}` ];
    }
  });

  /**
   * DELETE existing credential
   */
  srv.on('fnCallDelete', async (req) => {
    try {
      const result = await deleteCredential(
        "aribabtp",       // namespace
        "password",       // type
        "aribabtp_new"    // name
      );
      return [ "✅ Credential deleted successfully" ];
    } catch (error) {
      console.error("❌ Delete failed:", error.message);
      return [ `Delete failed: ${error.message}` ];
    }
  });
});
