function processUserAction(options) {
    if (!options || typeof options !== 'object') {
      throw new Error('Invalid argument: options must be an object');
    }
  
    const { action, payload, dryRun = false } = options;
  
    if (!action || typeof action !== 'string') {
      throw new Error('Missing or invalid "action" parameter');
    }
  
    if (!payload || typeof payload !== 'object') {
      throw new Error('Missing or invalid "payload" parameter');
    }
  
    try {
      switch (action.toLowerCase()) {
        case 'create':
          if (!payload.name) {
            throw new Error('Missing "name" in payload for create action');
          }
          if (dryRun) {
            return `Dry run: would create item with name "${payload.name}"`;
          }
          // Simulate creation logic
          return `Item "${payload.name}" successfully created`;
  
        case 'update':
          if (!payload.id || !payload.changes) {
            throw new Error('Missing "id" or "changes" in payload for update action');
          }
          if (dryRun) {
            return `Dry run: would update item #${payload.id} with changes ${JSON.stringify(payload.changes)}`;
          }
          // Simulate update logic
          return `Item #${payload.id} successfully updated`;
  
        case 'delete':
          if (!payload.id) {
            throw new Error('Missing "id" in payload for delete action');
          }
          if (dryRun) {
            return `Dry run: would delete item #${payload.id}`;
          }
          // Simulate delete logic
          return `Item #${payload.id} successfully deleted`;
  
        default:
          throw new Error(`Unknown action type: ${action}`);
      }
    } catch (error) {
      console.error('Error processing user action:', error.message);
      return `Failed to process action: ${error.message}`;
    }
}