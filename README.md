# Doing Your Work

### Create a Branch
Whenever you begin work on a new feature or bugfix, it's important that you create a new branch. Not only is it proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task you complete.

To create a new branch and start working on it:

```shell
# Checkout the master branch - you want your new branch to come from master
git checkout master

# Create a new branch named newfeature (give your branch its own simple informative name)
git branch newfeature

# Switch to your new branch
git checkout newfeature
```

Now, go to town hacking away and making whatever changes you want to.

## Submitting a Pull Request

### Cleaning Up Your Work

Prior to submitting your pull request, you might want to do a few things to clean up your branch and make it as simple as possible for the original repo's maintainer to test, accept, and merge your work.

```shell
# Fetch upstream master and merge with your repo's master branch
git checkout master
git pull origin master

# If there were any new commits, rebase your development branch
git checkout newfeature
git rebase master
```

### Submitting

Once you've committed and pushed all of your changes to GitHub, go to the repo page on GitHub, and click the pull request button. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes on your development branch and update.

### Pull request

When pull request was created, you should add reviewers. After you have got review, you will be able to merge your branch to master. For doing this action you should select 'Squash and merge' and click on the button.

<img src="https://d1ro8r1rbfn3jf.cloudfront.net/ms_89217/Y2rfvxMZhyD3xwo4rleYje5ixWJ9eF/Revert%2B%2522test%2Bcommit%2522%2Bby%2Bdvlasenko96%2B%25C2%25B7%2BPull%2BRequest%2B%25236%2B%25C2%25B7%2Bseniordevonly%252Fnetsweeper-ui%2B2017-07-31%2B15-34-28.png?Expires=1501594513&Signature=nhYoNf-w3inJoA9iKkeuIKWnk2godZsc8G7qUL3jmFcUu1kOuq-Afovth8ptcNbEyZdIGFMCFfi1mSaAFLmPYNs41DhKekUztE5JkbJWQtBCYO7bhS5DpxKpzLvSQlmwXOYPGtk9k8x4K4t3skvoyGQoo6ihDelh0cpNbavZYBZWGUo4S751SV0jlk1uPhTSBIcKv11G3Z1RA9SxTzRW0MRZ-KaBeTggJsyAIdQlmxFRGxS-Wl0nh~I6LF-pltZ6Sk6p65V7uKLxfksTVYMafyMtR7m3PY0sN8D9VYlv9aHlj6LCYo0IqSach7odHnK3Y7GgOc5cNgUNlFyojPMcMQ__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA" height="200" />

# JSON Server
Documentation [here](https://github.com/typicode/json-server).
All files related to DB is in db/ folder
## Installation
    $ npm install -g json-server
## Start Server
    $ json-server --watch db.json