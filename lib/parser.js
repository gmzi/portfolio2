import fs from 'fs'

export function parseRepo(repo) {
    fs.writeFileSync('./lib/repo.json', repo, 'utf8', (data, error) => {
        if (error) {
            console.log(error)
            process.exit(1)
        }
        console.log('writing....')
    })
    console.log('done')
    return;
}