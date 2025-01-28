tsvを言語設定として作成する拡張機能
現状はsettings.jsonが別で必要（拡張機能だけで完結させる方法が不明）

.tsvの時に自動でタブを使う設定の参考
https://zenn.dev/okayurisotto/articles/088de70c4b4952
https://qiita.com/riekure/items/2b344129dbe5e2507e48

package.jsonに以下で適用できそうだが、できなかった
"configurationDefaults": {
      "[tsv]": {
        "editor.detectIndentation": false,
        "editor.insertSpaces": false
      }
    }