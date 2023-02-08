# rust-crud

## 環境
```
rustup default nightly
```

sample.envをコピーして.envを作成。作成後は環境に合わせて自分で設定

## DB起動
```
docker-compose up -d
```

## APIサーバー起動
```
cargo run
```

## マイグレーション
DDL作成
```
diesel migration generate [migration_name]
```

マイグレーション実行(model作成後もこのコマンドでschema生成)
```
diesel migration run
```

## ヘルプ

libqlのエラーがでたら以下コマンドでキャッシュ削除&再ビルド
```
cargo clean
cargo build
```

## フロントエンドのビルド
```
yarn install
yarn run dev
```
