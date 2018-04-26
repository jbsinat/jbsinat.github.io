## 向`git`推送文件出错

**错误信息：**
```
$ git push -u origin master
To github.com:jbsinat/jbsinat.github.io.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:jbsinat/jbsinat.github.io.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**错误原因：**  
出现错误的主要原因是`github`中的`README.md`文件不在本地代码目录中   
可以通过如下命令进行代码合并`【注：pull=fetch+merge]`
```
git pull --rebase origin master
```
检查本地目录，会发现已经将`git`上的`README.md`文件同步了下来    
此时在使用
```
git push -u origin master
```
即可完成代码上传到github