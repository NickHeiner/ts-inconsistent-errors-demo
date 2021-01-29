require('hard-rejection/register');
const { createProject } = require('@ts-morph/bootstrap');
const path = require('path');
const util = require('util')

async function main() {
  const project = await createProject({
    tsConfigFilePath: require.resolve('./tsconfig.json')
  });

  const fileName = path.resolve(__dirname, './packages/main/index.tsx');
  
  const diagnostics = project.getLanguageService()
    .getSemanticDiagnostics(fileName);
    
  console.log(util.inspect(diagnostics));
}

main();